import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-nest-secure-alarm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNestSecureAlarm {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480.5-450q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T480-510q-12 0-21 8.63T450-480q0 12 9 21t21.5 9Zm120 0q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T600-510q-12 0-21 8.63T570-480q0 12 9 21t21.5 9Zm-240 0q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T360-510q-12 0-21 8.63T330-480q0 12 9 21t21.5 9Zm120 120q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T480-390q-12 0-21 8.63T450-360q0 12 9 21t21.5 9Zm120 0q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T600-390q-12 0-21 8.63T570-360q0 12 9 21t21.5 9Zm-240 0q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T360-390q-12 0-21 8.63T330-360q0 12 9 21t21.5 9Zm120-240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T480-630q-12 0-21 8.63T450-600q0 12 9 21t21.5 9Zm120 0q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T600-630q-12 0-21 8.63T570-600q0 12 9 21t21.5 9Zm-240 0q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T360-630q-12 0-21 8.63T330-600q0 12 9 21t21.5 9ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-0.22-60Q621-140 720.5-239.28q99.5-99.28 99.5-240.5Q820-621 720.72-720.5t-240.5-99.5Q339-820 239.5-720.72t-99.5 240.5Q140-339 239.28-239.5q99.28 99.5 240.5 99.5ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNestSecureAlarm;
