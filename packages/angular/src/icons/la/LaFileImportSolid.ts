import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-file-import-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFileImportSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6 4 L 6 28 L 26 28 L 26 19 L 24 19 L 24 26 L 8 26 L 8 6 L 24 6 L 24 13 L 26 13 L 26 4 Z M 17.5 11 L 13.19 15.28 L 12.5 16 L 13.19 16.72 L 17.5 21 L 18.91 19.59 L 16.31 17 L 28 17 L 28 15 L 16.31 15 L 18.91 12.41 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFileImportSolid;
