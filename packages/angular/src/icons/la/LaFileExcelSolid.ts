import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-file-excel-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFileExcelSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6 3 L 6 29 L 26 29 L 26 9.6 L 25.7 9.3 L 19.7 3.3 L 19.4 3 L 6 3 z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 L 8 5 z M 20 6.4 L 22.6 9 L 20 9 L 20 6.4 z M 11 13 L 14.8 18.5 L 11 24 L 13.4 24 L 16 20.2 L 18.6 24 L 21 24 L 17.2 18.5 L 21 13 L 18.6 13 L 16 16.8 L 13.4 13 L 11 13 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFileExcelSolid;
