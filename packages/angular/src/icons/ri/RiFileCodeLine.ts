import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-code-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFileCodeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 4H5V20H19V8H15V4ZM3 2.99C3 2.44 3.45 2 4 2H16L21 7L21 20.99C21 21.55 20.56 22 20.01 22H3.99C3.44 22 3 21.54 3 21.01V2.99ZM17.66 12L14.12 15.54L12.71 14.12L14.83 12L12.71 9.88L14.12 8.46L17.66 12ZM6.34 12L9.88 8.46L11.29 9.88L9.17 12L11.29 14.12L9.88 15.54L6.34 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFileCodeLine;
