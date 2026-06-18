import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-file-export-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFileExportSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6 4 L 6 28 L 26 28 L 26 20 L 24 22 L 24 26 L 8 26 L 8 6 L 24 6 L 24 10 L 26 12 L 26 4 Z M 22.41 11 L 21 12.41 L 23.56 15 L 13.91 15 L 13.91 17 L 23.56 17 L 21 19.59 L 22.41 21 L 26.72 16.72 L 27.41 16 L 26.72 15.28 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFileExportSolid;
