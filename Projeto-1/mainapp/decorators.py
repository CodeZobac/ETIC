from django.http import HttpResponseForbidden
from functools import wraps

def admin_forbiden(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if request.user.is_authenticated and request.user.is_staff:
            return HttpResponseForbidden("Admins are not allowed to access this view.")
        return view_func(request, *args, **kwargs)
    return _wrapped_view
