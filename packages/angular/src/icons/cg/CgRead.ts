import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-read",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgRead {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7 14C8.1 14 9 13.1 9 12C9 10.9 8.1 10 7 10C5.9 10 5 10.9 5 12C5 13.1 5.9 14 7 14ZM10.46 10C9.77 8.8 8.48 8 7 8C5.14 8 3.57 9.27 3.13 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.13C3.57 14.73 5.14 16 7 16C9.21 16 11 14.21 11 12H13C13 14.21 14.79 16 17 16C18.86 16 20.43 14.73 20.87 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.87C20.43 9.27 18.86 8 17 8C15.52 8 14.23 8.8 13.54 10H10.46ZM15 12C15 13.1 15.9 14 17 14C18.1 14 19 13.1 19 12C19 10.9 18.1 10 17 10C15.9 10 15 10.9 15 12Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgRead;
