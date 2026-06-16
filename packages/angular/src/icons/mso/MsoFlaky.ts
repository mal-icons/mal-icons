import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-flaky",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFlaky {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q84 0 157 31t127 85q54 54 85 127t31 157q0 85-31 158t-85 127q-54 54-127 84.5T480-80ZM294-518l56-57 56 57 36-36-57-56 57-56-36-36-56 57-56-57-36 36 57 56-57 56 36 36Zm186 378q145 0 242.5-97.5T820-480q0-72-26-134t-72-108L238-238q46 46 108 72t134 26Zm82-123-89-89 35-36 54 54 100-99 35 35-135 135Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFlaky;
