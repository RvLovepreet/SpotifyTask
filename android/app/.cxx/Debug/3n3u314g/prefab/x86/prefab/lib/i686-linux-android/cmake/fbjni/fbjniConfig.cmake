if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/chicmic/.gradle/caches/transforms-3/c0de537e8e5eb5ed3bdd651bb8ac094c/transformed/jetified-fbjni-0.3.0/prefab/modules/fbjni/libs/android.x86/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/chicmic/.gradle/caches/transforms-3/c0de537e8e5eb5ed3bdd651bb8ac094c/transformed/jetified-fbjni-0.3.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

