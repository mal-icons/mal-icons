import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-catalog-option",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrCatalogOption {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5.5,18 C4.12,18 3,19.12 3,20.5 C3,21.88 4.12,23 5.5,23 L22,23 M3,20.5 L3,3.5 C3,2.12 4.12,1 5.5,1 L21,1 L21,18.01 L5.49,18.01 M20.5,18 C19.12,18 18,19.12 18,20.5 C18,21.88 19.12,23 20.5,23 L20.5,23"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrCatalogOption;
