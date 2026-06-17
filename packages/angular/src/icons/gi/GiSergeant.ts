import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sergeant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSergeant {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M255.98 39.21C226.38 86.89 161.38 164.77 106 203.71V256.6c53.11-38.92 105.11-92.54 140.56-145.71L256 96.74l9.44 14.16c35.33 53 87.96 106.3 140.56 145.47V203.77C349.61 164.84 285.35 86.83 255.98 39.21zm0 108.41C226.38 195.29 161.38 273.17 106 312.12v52.89C159.11 326.09 211.11 272.47 246.56 219.3l9.44-14.16 9.44 14.16c35.33 53 87.96 106.3 140.56 145.47v-52.6c-56.39-38.94-120.65-116.94-150.02-164.56zm0 107.78C226.38 303.08 161.38 380.96 106 419.9v52.89c53.11-38.92 105.11-92.54 140.56-145.71l9.44-14.16 9.44 14.16c35.33 53 87.96 106.3 140.56 145.47v-52.6c-56.39-38.94-120.65-116.94-150.02-164.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSergeant;
