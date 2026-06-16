import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-steppers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSteppers {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-365q-49 0-82-33t-33-82q0-49 33-82t82-33q49 0 82 33t33 82q0 49-33 82t-82 33Zm0-60q24 0 39.5-15.5T235-480q0-24-15.5-39.5T180-535q-24 0-39.5 15.5T125-480q0 24 15.5 39.5T180-425Zm300 60q-49 0-82-33t-33-82q0-49 33-82t82-33q49 0 82 33t33 82q0 49-33 82t-82 33Zm0-60q24 0 39.5-15.5T535-480q0-24-15.5-39.5T480-535q-24 0-39.5 15.5T425-480q0 24 15.5 39.5T480-425Zm300 60q-49 0-82-33t-33-82q0-49 33-82t82-33q49 0 82 33t33 82q0 49-33 82t-82 33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSteppers;
