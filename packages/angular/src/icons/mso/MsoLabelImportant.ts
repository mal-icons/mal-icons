import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-label-important",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLabelImportant {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m120-200 180-280-180-280h478q22 0 40 11.5t31 28.5l171 240-171 240q-13 17-31 28.5T598-200H120Zm110-60h380l156-220-156-220H230l142 220-142 220Zm142-220L230-700l142 220-142 220 142-220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLabelImportant;
