package www

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func RegisterHandlers(r *mux.Router, s *Server) {
	r.HandleFunc("/v1/items", apiHandler()).Methods("GET")
}

type item struct {
	Name string `json:"name"`
}

func apiHandler() func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {

		//ID := mux.Vars(r)["ID"]
		w.Header().Set("Content-Type", "application/json;charset=UTF-8")

		items := []item{item{"Bob"}, item{"Joe"}, item{"Frank"}}
		if err := json.NewEncoder(w).Encode(items); err != nil {
			w.WriteHeader(http.StatusInternalServerError)
		}
	}
}
