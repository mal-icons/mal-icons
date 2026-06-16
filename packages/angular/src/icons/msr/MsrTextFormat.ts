import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-text-format",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTextFormat {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M230-200q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T230-260h500q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T730-200H230Zm163-324h174l-85-222h-4l-85 222Zm-76.47 164Q301-360 296-370.5t0-25.5l140-373q4.9-12.57 17.56-21.78Q466.23-800 480.11-800q13.89 0 26.39 9.22T524-769l140 373q5 15 0 25.5T642.5-360q-7.5 0-13.93-4.43Q622.14-368.86 620-375l-39-104H378l-39 104q-2 6-8.35 10.5t-14.12 4.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTextFormat;
