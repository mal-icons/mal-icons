import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-view-in-ar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrViewInAr {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M448-167 228-296q-13.77-8.43-21.39-22.21Q199-332 199-348v-257q0-16 7.61-29.79Q214.23-648.57 228-657l221-131q14-8 31-8t31 8l221 131q13.78 8.43 21.39 22.21Q761-621 761-605v257q0 16-7.87 29.79Q745.25-304.43 731-296L508-167q-14.33 8-30.16 8Q462-159 448-167Zm2-69v-224L260-569v219l190 114Zm60 0 191-114v-219L510-460v224ZM109.83-661Q97-661 88.5-669.62T80-691v-129q0-24.75 17.63-42.37T140-880h129q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T269-820H140v129q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM140-80q-24.75 0-42.37-17.62T80-140v-129q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-269v129h129q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q299-97 290.38-88.5T269-80H140Zm680 0H691q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T691-140h129v-129q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T880-269v129q0 24.75-17.62 42.38T820-80Zm0-611v-129H691q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T691-880h129q24.75 0 42.38 17.63T880-820v129q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T820-691ZM480-514l190-110-190-109-190 109 190 110Zm0 25Zm0-25Zm30 54Zm-60 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrViewInAr;
