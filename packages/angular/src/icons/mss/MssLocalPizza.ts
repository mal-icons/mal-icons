import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-local-pizza",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLocalPizza {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80 80-685q86-72 188-113.5T480-840q110 0 212 41.5T880-685L480-80Zm0-107 321-484q-72-47-153.17-78T480-780q-87.04 0-168.02 31T159-671l321 484ZM370.06-565Q393-565 409-581.06q16-16.06 16-39T408.94-659q-16.06-16-39-16T331-658.94q-16 16.06-16 39T331.06-581q16.06 16 39 16Zm110 215Q503-350 519-366.06q16-16.06 16-39T518.94-444q-16.06-16-39-16T441-443.94q-16 16.06-16 39T441.06-366q16.06 16 39 16ZM483-187Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLocalPizza;
