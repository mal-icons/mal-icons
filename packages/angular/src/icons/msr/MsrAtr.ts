import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-atr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAtr {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M230-160q-45 0-77.5-32.5T120-270q0-45 32.5-77.5T230-380q45 0 77.5 32.5T340-270q0 45-32.5 77.5T230-160Zm500 0q-45 0-77.5-32.5T620-270q0-45 32.5-77.5T730-380q46 0 78 32.5t32 77.5q0 45-32 77.5T730-160ZM480-580q-45 0-77.5-32.5T370-690q0-45 32.5-77.5T480-800q45 0 77.5 32.5T590-690q0 45-32.5 77.5T480-580Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAtr;
