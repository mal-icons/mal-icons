import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-gallery",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfGallery {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 10v-10h-13v13h13v-3zM1 1h11v8h-0.75l-2.56-3.32-1.16 1.21-2.25-3.88-3.58 5.99h-0.7v-8zM9.98 9h-7.12l2.4-4.01 2.06 3.56 1.27-1.34 1.38 1.79zM1 12v-2h11v2h-11zM17 3v13h-13v-1.98h1v0.98h11v-11h-2v-1h3z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfGallery;
