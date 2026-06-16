import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-agriculture",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAgriculture {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M145-599q-11.47 0-19.24-9Q118-617 118-629t7.76-21q7.76-9 19.24-9h149q29 0 45 18t21 42H145Zm83 439q-79 0-133.5-55.57T40-350q0-78.85 55.5-134.43Q151-540 230-540q32 0 63.92 11 31.92 11 58.08 33h69q42 0 70.5-29.67T520-597v-104.36L471-749l-61 61-19-18 142-142 18 18-62 62 49 49h272q26 0 43 17t17 43v259q23 20 36.5 47.24Q920-325.51 920-295q0 55.93-39.55 95.46Q840.9-160 784.95-160q-55.95 0-95.45-39.5T650-292q0-6 0.5-14.5T652-320H418q-11 69-64 114.5T228-160Zm1.88-60Q284-220 322-257.88q38-37.88 38-92Q360-404 322.12-442q-37.88-38-92-38Q176-480 138-442.12q-38 37.88-38 92Q100-296 137.88-258q37.88 38 92 38ZM700-490Zm84.82 270Q816-220 838-241.82q22-21.82 22-53Q860-326 838.18-348q-21.82-22-53-22Q754-370 732-348.18q-22 21.82-22 53Q710-264 731.82-242q21.82 22 53 22Zm-554.71-60Q201-280 180.5-300.38q-20.5-20.38-20.5-49.5Q160-379 180.38-399.5q20.38-20.5 49.5-20.5Q259-420 279.5-399.62q20.5 20.38 20.5 49.5Q300-321 279.62-300.5q-20.38 20.5-49.5 20.5ZM418-381h263q18-22 46.5-35.5t60.06-13.5H810v-229H580v62q0 65-47 113t-112 48h-21q5 10 10.06 24.52Q415.11-396.97 418-381Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAgriculture;
