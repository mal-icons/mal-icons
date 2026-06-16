import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-view-in-ar-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrViewInArOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M794-80H691q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T691-140h55v8L126-748h14v57q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Q97-661 88.5-669.62T80-691v-103l-33-33q-9-9.07-9-21.53Q38-861 47.05-870q9.05-9 21.5-9Q81-879 90-870l765 765q9 9 9 21t-9.05 21q-9.05 9-21.5 9Q821-54 812-62.91L794-80Zm86-189v103l-60-60v-43q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T880-269ZM166-880h103q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T269-820h-43l-60-60Zm683.83 219Q837-661 828.5-669.62T820-691v-129H691q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T691-880h129q24.75 0 42.38 17.63T880-820v129q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM140-80q-24.75 0-42.37-17.62T80-140v-129q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-269v129h129q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q299-97 290.38-88.5T269-80H140Zm396-430Zm-54 32Zm260 174L329-717l120-71q14-8 31-8t31 8l221 131q13.78 8.29 21.39 22.23Q761-620.83 761-605v257q0 12.77-5 24.39Q751-312 742-304ZM448-167 228-296q-13.77-8.29-21.39-22.23Q199-332.17 199-348v-257q0-15.83 7.61-29.77Q214.23-648.71 228-657l47-28 207 207 207 207-181 104q-14.33 8-30.16 8Q462-159 448-167Zm65-366Zm-63 73Zm108-28Zm-48 38ZM374-672l139 139 157-91-190-109-106 61Zm76 436v-224L260-569v219l190 114Zm251-109v-224l-143 81 143 143ZM510-236l134-80-134-134v214Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrViewInArOff;
