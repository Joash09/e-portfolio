FROM mcr.microsoft.com/dotnet/aspnet:5.0

COPY ./bin/Release/net5.0/publish App/
WORKDIR App/
# ENV COMPlus_EnableDiagnostics=0
ENTRYPOINT ["dotnet", "Blog.Web.Host.dll"]
