import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-vertical-distribute",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrVerticalDistribute {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-820q-12.75 0-21.37-8.68Q80-837.35 80-850.17 80-863 88.63-871.5T110-880h740q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-820H110Zm220 390q-20.83 0-35.42-14.62Q280-459.23 280-480.12 280-501 294.58-515.5 309.17-530 330-530h300q20.83 0 35.42 14.62Q680-500.76 680-479.88 680-459 665.42-444.5 650.83-430 630-430H330ZM110-80q-12.75 0-21.37-8.68Q80-97.35 80-110.17 80-123 88.63-131.5T110-140h740q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q880-97 871.38-88.5T850-80H110Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrVerticalDistribute;
