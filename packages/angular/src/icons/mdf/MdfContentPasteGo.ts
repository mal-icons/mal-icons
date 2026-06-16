import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-content-paste-go",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfContentPasteGo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5h2v3h10V5h2v6h2V5c0-1.1-0.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h5v-2H5V5zm7-2c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1z"}],["path",{"d":"m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfContentPasteGo;
