import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-fit-screen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfFitScreen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 4h3c1.1 0 2 0.9 2 2v2h-2V6h-3V4zM4 8V6h3V4H4c-1.1 0-2 0.9-2 2v2h2zm16 8v2h-3v2h3c1.1 0 2-0.9 2-2v-2h-2zM7 18H4v-2H2v2c0 1.10.9 2 2 2h3v-2zM18 8H6v8h12V8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfFitScreen;
