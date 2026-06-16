import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-medical-information",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdMedicalInformation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 7h-5V4c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v3H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zm-9-3h2v5h-2V4zm9 16H4V9h5c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2h5v11zm-9-4H9v2H7v-2H5v-2h2v-2h2v2h2v2zm2-1.5V13h6v1.5h-6zm0 3V16h4v1.5h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdMedicalInformation;
