package domain

interface TranslationsProvider {
    fun retrieve(language: String): Translations
}

data class Translations(
    val data: Map<String, String>
)

class StaticTranslationsProvider : TranslationsProvider {

    override fun retrieve(language: String): Translations =
        Translations(
            mapOf(
                "appflow.customerData.hi" to "Hi",
                "appflow.customerData.t_and_c" to "Accept t&c"
            )
        )

}