import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-control-camera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoControlCamera {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M481-376q-44 0-74.5-30.5T376-481q0-44 30.5-74.5T481-586q44 0 74.5 30.5T586-481q0 44-30.5 74.5T481-376Zm-1 296L301-259l43-42 136 136 136-136 43 42L480-80ZM259-301 80-480l179-179 42 43-136 136 136 136-42 43Zm85-358-43-42 179-179 179 179-43 42-136-136-136 136Zm357 358-42-43 136-136-136-136 42-43 179 179-179 179Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoControlCamera;
