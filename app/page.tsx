import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/Listings/ListingCard";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function Home() {
  const isEmpty = true;
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if(listings.length === 0){
    return (
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }

  return (
    // <div className="p-2">Loading...</div>
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
            {listings.map((listing) =>{
              return (
                <ListingCard 
                  key={listing.id}
                  data={listing}  
                  currentUser={currentUser}
                />
              )
            })}
        </div>
      </Container>
    </ClientOnly>
  )
}
