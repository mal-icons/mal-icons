import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-directions-bus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDirectionsBus {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M249-120q-13 0-23-7.5T216-147v-84q-29-16-42.5-46T160-341v-397q0-74 76.5-108T481-880q166 0 242.5 34T800-738v397q0 34-13.5 64T744-231v84q0 12-10 19.5t-23 7.5h-19q-14 0-24-7.5T658-147v-55H302v55q0 12-10 19.5t-24 7.5h-19Zm232-644h259-520 261Zm177 293H220h520-82Zm-438-60h520v-173H220v173Zm106 219q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm308 0q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16ZM220-764h520q-24-26-92-41t-167-15q-118 0-181 13.5T220-764Zm82 502h356q35 0 58.5-27t23.5-62v-120H220v120q0 35 23.5 62t58.5 27Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDirectionsBus;
