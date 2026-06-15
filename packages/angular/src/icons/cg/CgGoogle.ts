import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-google",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgGoogle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 12C6 15.31 8.69 18 12 18C14.61 18 16.83 16.33 17.66 14H12V10H21.8V14H21.8C20.87 18.56 16.84 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C15.45 2 18.48 3.74 20.28 6.39L17 8.69C15.93 7.07 14.09 6 12 6C8.69 6 6 8.69 6 12Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgGoogle;
