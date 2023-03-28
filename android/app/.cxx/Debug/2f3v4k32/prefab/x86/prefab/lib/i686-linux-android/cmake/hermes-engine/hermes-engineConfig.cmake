if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/chicmic/.gradle/caches/transforms-3/04e2569ceab08da9b2dc7006a3b1dfa2/transformed/jetified-hermes-android-0.71.3-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/chicmic/.gradle/caches/transforms-3/04e2569ceab08da9b2dc7006a3b1dfa2/transformed/jetified-hermes-android-0.71.3-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

