# Build & deploy 111.pete.ke (Vite + React SPA, outDir=dist)
#
# SAFETY: the live wwwroot may contain a `_repo` junction pointing back into this
# repo. robocopy /MIR will delete THROUGH that junction and wipe the source repo
# unless it is excluded with an explicit /XD <wwwroot>\_repo. The shared helper's
# /XJD /XJF alone is NOT sufficient for the destination-cleanup pass, so we MUST
# pass -PreserveDirs @('_repo'). Do NOT remove this.
[CmdletBinding()]
param([switch]$Install)

Import-Module C:\inetpub\repos\_lib\deploy.psm1 -Force
Invoke-StaticDeploy `
  -RepoDir      $PSScriptRoot `
  -BuildDir     'dist' `
  -LiveDirs     @('C:\inetpub\wwwroot\111.pete.ke') `
  -SmokeHosts   @('111.pete.ke') `
  -PreserveDirs @('_repo') `
  -Install:$Install
