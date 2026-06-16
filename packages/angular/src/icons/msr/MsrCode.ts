import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCode {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M659-261q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l177-177-176-176q-9-9-8.5-21.5T619-701q9-9 21.5-9t21.5 9l197 198q9 9 9 21t-9 21L659-261Zm-360-3L101-461q-9-9-9-21t9-21l200-200q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L166-482l176 176q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCode;
