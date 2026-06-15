import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-language",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiLanguage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.62a48.47 48.47 0 0 1 6-0.37m0 0c1.12 0 2.230.04 3.330.11M9 5.25V3m3.33 2.36C11.18 10.66 7.69 15.08 3 17.5m9.33-12.14c0.90.06 1.790.15 2.670.26m-4.59 8.49a18.02 18.02 0 0 1-3.83-5.8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiLanguage;
