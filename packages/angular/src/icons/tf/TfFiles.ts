import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-files",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfFiles {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 0h-6.5v2.01h1v-1.01h5v4h4v8h-4.02v1h5.02v-9.82l-4.5-4.18zM13 1.83l2.34 2.17h-2.33v-2.17zM0 3v14h11v-9.82l-4.5-4.18h-6.5zM7 4.83l2.34 2.17h-2.33v-2.17zM1 16v-12h5v4h4v8h-9z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfFiles;
