import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-double-quaver",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDoubleQuaver {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M451.13 25.63l-12.16 3.81-262.06 82.62-6.53 2.06V397.06c-1.26-0.5-2.53-0.96-3.84-1.37-6.97-2.18-14.84-3.3-23.37-3.34-8.53-0.04-17.72 1.01-27.31 3.13-19.18 4.23-36.47 12.1-49.5 21.94-13.03 9.84-22.75 21.83-22.75 36.13 0 7.15 3.01 13.94 7.72 18.85 4.71 4.91 10.87 8.22 17.84 10.41 13.95 4.37 31.54 4.45 50.720.22 19.18-4.23 36.46-12.1 49.5-21.94 13.03-9.84 22.72-21.86 22.72-36.16 0-4.32-1.12-8.5-3.03-12.22V225.22l243.37-76.69v142.41c-1.26-0.5-2.55-0.96-3.87-1.37-6.97-2.18-14.84-3.3-23.37-3.34-8.53-0.04-17.730.98-27.31 3.09-19.18 4.23-36.47 12.1-49.5 21.94-13.03 9.84-22.72 21.86-22.72 36.16 0 7.15 2.98 13.94 7.69 18.84 4.71 4.91 10.87 8.19 17.84 10.38 13.95 4.37 31.54 4.48 50.720.25 19.18-4.23 36.46-12.1 49.5-21.94 13.03-9.84 22.72-21.86 22.72-36.16 0-4.3-1.1-8.48-3-12.19V25.62zm-18.69 25.5v29.19L189.06 157v-29.19l243.38-76.69zm0 48.78v29l-243.37 76.72v-29l243.38-76.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDoubleQuaver;
