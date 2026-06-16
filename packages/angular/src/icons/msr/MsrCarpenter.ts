import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-carpenter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCarpenter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M615-99q-8.25 8.13-19.12 12.57Q585-82 573-82t-23.34-4.43Q538.32-90.87 530-99l-79-78q-8-8-12.58-18.21Q433.83-205.41 433-216q-1-11 2.5-21t10.5-20l16-21-339-479 143-143 533 532q9 9 13.5 20t4.5 22q0 11-4.5 22.5T799-283L615-99ZM506-320l126-127-366-368-65 65 305 430Zm66 179 185-185-81-80-184 185 80 80Zm-66-179 126-127-126 127Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCarpenter;
