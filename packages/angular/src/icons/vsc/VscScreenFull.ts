import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-screen-full",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscScreenFull {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 3C3.34 3 3 3.34 3 3.75V5.5C3 5.78 2.78 6 2.5 6C2.22 6 2 5.78 2 5.5V3.75C2 2.78 2.78 2 3.75 2H5.5C5.78 2 6 2.22 6 2.5C6 2.78 5.78 3 5.5 3H3.75ZM10 2.5C10 2.22 10.22 2 10.5 2H12.25C13.22 2 14 2.78 14 3.75V5.5C14 5.78 13.78 6 13.5 6C13.22 6 13 5.78 13 5.5V3.75C13 3.34 12.66 3 12.25 3H10.5C10.22 3 10 2.78 10 2.5ZM2.5 10C2.78 10 3 10.22 3 10.5V12.25C3 12.66 3.34 13 3.75 13H5.5C5.78 13 6 13.22 6 13.5C6 13.78 5.78 14 5.5 14H3.75C2.78 14 2 13.22 2 12.25V10.5C2 10.22 2.22 10 2.5 10ZM13.5 10C13.78 10 14 10.22 14 10.5V12.25C14 13.22 13.22 14 12.25 14H10.5C10.22 14 10 13.78 10 13.5C10 13.22 10.22 13 10.5 13H12.25C12.66 13 13 12.66 13 12.25V10.5C13 10.22 13.22 10 13.5 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscScreenFull;
