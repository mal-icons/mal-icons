import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-017",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract017 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m143.49,21c-50.16,0-90.77,39.7-90.77,89.01v2.35h94.73c13.56,0 24.53,13.34 24.53,29.96s-10.97,29.96-24.53,29.96h-94.73v15.72h94.73c13.56,0 24.53,13.49 24.53,30.11s-10.97,29.96-24.53,29.96h-94.73v15.72h94.73c13.56,0 24.53,13.34 24.53,29.96s-10.97,30.11-24.53,30.11h-94.73v15.72h94.73c13.56,0 24.53,13.34 24.53,29.96s-10.97,29.96-24.53,29.96h-94.73v40.1h-14.54v37.16h-17.18v14.25h17.18 435.78 17.04v-14.25h-17.04v-37.16h-14.69v-329.59c0-49.3-40.17-89.01-90.33-89.01s-90.62,39.7-90.62,89.01v2.35h92.97c13.56,0 24.53,13.34 24.53,29.96s-10.97,29.96-24.53,29.96h-92.97v15.72h92.97c13.56,0 24.53,13.49 24.53,30.11s-10.97,29.96-24.53,29.96h-92.97v15.72h92.97c13.56,0 24.53,13.34 24.53,29.96s-10.97,30.11-24.53,30.11h-92.97v15.72h92.97c13.56,0 24.53,13.34 24.53,29.96s-10.97,29.96-24.53,29.96h-92.97v40.1h-44.5v-329.59c0-49.3-40.17-89.01-90.33-89.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract017;
