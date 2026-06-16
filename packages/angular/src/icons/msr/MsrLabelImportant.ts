import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-label-important",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLabelImportant {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M300-480 179-668q-20-30-2-61t53-31h367.9Q620-760 638-748.5q18 11.5 31 28.5l146 205q11 15.97 11 34.99Q826-461 815-445L669-240q-13 17-31 28.5T597.9-200H230q-35 0-53-31t2-61l121-188Zm72 0L230-260h380l156-220-156-220H230l142 220Zm0 0L230-700l142 220-142 220 142-220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLabelImportant;
