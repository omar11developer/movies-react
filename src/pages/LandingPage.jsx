import { MovieGrid } from "../components/MovieGrid";
import { SearchMovie } from "../components/SearchMovie";
import { useDebounce } from "../hooks/useDebunce";
import { useQuery } from "../hooks/useQuery";


export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 300)
    return(
        <div>
        <SearchMovie />
        <MovieGrid  key={debouncedSearch} search ={debouncedSearch}/>
        </div>
       
    );
}