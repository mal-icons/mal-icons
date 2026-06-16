import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-countertops",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCountertops {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-160v-350H80v-60h155q-28.87 0-49.44-20.56Q165-611.12 165-640v-160h230v160q0 29-20.56 49.5Q353.88-570 325-570h325v-120q0-21.25-14.37-35.62T600-740q-18 0-32 11.5T551-700h-61q5-42 36-71t74-29q45.83 0 77.92 32.08Q710-735.83 710-690v120h170v60h-80v350H160Zm65-470h110v-110H225v110Zm-5 410h230v-290H220v290Zm290 0h230v-290H510v290ZM225-630h110-110Zm255 265Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCountertops;
