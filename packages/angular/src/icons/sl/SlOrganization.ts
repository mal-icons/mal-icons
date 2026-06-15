import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-organization",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlOrganization {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M815 576h145c35 0 64 29 64 64v320c0 35-29 64-64 64H640c-35 0-64-29-64-64V640c0-35 29-64 64-64h113v-38H270v38h114c35 0 64 29 64 64v320c0 35-29 64-64 64H64c-35 0-64-29-64-64V640c0-35 29-64 64-64h144v-60c0-22 28-33 53-33h220v-36H343c-35 0-64-29-64-64V63c0-35 29-64 64-64h320c35 0 64 29 64 64v320c0 35-29 64-64 64H545v37c83 0 134-1 217-1 25 0 53 10 53 33v60zm145 64H640v320h320V640zM663 63H343v320h320V63zM384 640H64v320h320V640z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlOrganization;
