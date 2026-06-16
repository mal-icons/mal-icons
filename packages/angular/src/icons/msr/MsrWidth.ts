import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-width",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWidth {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m236-449 66 66q9 9 9 21t-9 21q-9 9-21 9t-21-9L142-459q-9-9-9-21t9-21l118-118q9-9 21-9t21 9q9 9 9 21.5t-9 21.5l-66 66h489l-66-67q-8-9-8.5-21t8.5-21q9-9 21-9t21 9l118 118q9 9 9 21t-9 21L701-341q-9 9-21 9t-21-9q-9-9-8.5-21t8.5-21l66-67-489 1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWidth;
