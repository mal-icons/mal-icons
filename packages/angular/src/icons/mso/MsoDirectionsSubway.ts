import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-directions-subway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDirectionsSubway {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240-120v-40l60-40q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l60 40v40H240Zm-20-425h234v-155H220v155Zm440 60H220h520-80Zm-146-60h226v-155H514v155ZM335.06-315Q358-315 374-331.06q16-16.06 16-39T373.94-409q-16.06-16-39-16T296-408.94q-16 16.06-16 39T296.06-331q16.06 16 39 16Zm290 0Q648-315 664-331.06q16-16.06 16-39T663.94-409q-16.06-16-39-16T586-408.94q-16 16.06-16 39T586.06-331q16.06 16 39 16ZM300-255h360q34 0 57-25t23-60v-145H220v145q0 35 23 60t57 25Zm180-565q-120 0-173 15.5T231-760h501q-18-27-76.5-43.5T480-820Zm0 60h252-501 249Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDirectionsSubway;
