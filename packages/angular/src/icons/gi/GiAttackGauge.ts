import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-attack-gauge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAttackGauge {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M105 73v174h46V73h-46zm-73 48c-1.75 0-2.910.44-4.57 1.9-1.67 1.46-3.58 4.1-5.2 7.76C18.98 137.96 17 149 17 160s1.98 22.04 5.23 29.35c1.62 3.65 3.53 6.3 5.2 7.76C29.1 198.56 30.25 199 32 199h55v-78H32zm137 0v30h180l40-30H169zm247.95 1.54L367 160l49.95 37.46L491.87 160l-74.92-37.46zM169 169v30h220l-40-30H169zM23 311v146h466V311H23zm361 18h87v110h-87V329z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAttackGauge;
