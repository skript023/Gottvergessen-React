
const key = `virtual bool download(const std::string filename, const std::filesystem::path& location) const;`

const Decrypt = (text) => {
    return Array.from(
        text,
        (c, i) => String.fromCharCode(c.charCodeAt() ^ key.charCodeAt(i % key.length))
    ).join('');
}

export default Decrypt