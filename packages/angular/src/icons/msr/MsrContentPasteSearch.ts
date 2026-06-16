import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-content-paste-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrContentPasteSearch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M660-130q-70.83 0-120.42-49.62Q490-229.23 490-300.12 490-371 539.62-420.5q49.62-49.5 120.5-49.5Q731-470 780.5-420.42 830-370.83 830-300q0 26-6.5 52T800-202l99 99q9 9 9 21t-9 21q-9 9-21 9t-21-9l-99-99q-21 17-46.5 23.5T660-130Zm-0.14-60Q706-190 738-221.86q32-31.86 32-78T738.14-378q-31.86-32-78-32T582-378.14q-32 31.86-32 78T581.86-222q31.86 32 78 32ZM180-120q-26 0-43-17t-17-43v-600q0-26 17-43t43-17h202q7-35 34.5-57.5T480-920q36 0 63.5 22.5T578-840h202q26 0 43 17t17 43v220q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T780-560v-220h-60v60q0 12.75-8.62 21.38T690-690H270q-12.75 0-21.37-8.62T240-720v-60h-60v600h220q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T400-120H180Zm300-660q17 0 28.5-11.5T520-820q0-17-11.5-28.5T480-860q-17 0-28.5 11.5T440-820q0 17 11.5 28.5T480-780Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrContentPasteSearch;
