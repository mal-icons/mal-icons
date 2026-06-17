import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-forward-sun",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiForwardSun {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M71.68 379.58c-68.2-68.22-68.2-178.94 0-247.16 68.22-68.2 178.95-68.2 247.17 0 20.78 20.8 35.22 45.54 43.34 71.8h41.43v-22.18c0-10.53 6.1-13.06 13.58-5.64l68.64 67.96c7.49 7.41 7.49 19.45 0 26.87l-68.64 67.96c-7.49 7.4-13.58 4.87-13.58-5.67v-22.15h-42.57c-8.3 24.92-22.37 48.38-42.2 68.22-68.22 68.2-178.95 68.2-247.17 0zm137.44 5.77v-45.65h-27.13v45.65h27.13zm-94.51-27.92l32.27-32.29-19.18-19.17-32.28 32.29 19.18 19.17zm161.89 0l19.17-19.18-32.28-32.28-19.17 19.17 32.28 32.29zM241.41 302.28c25.47-25.44 25.47-66.77 0-92.22-25.44-25.45-66.77-25.45-92.22 0-25.45 25.45-25.45 66.78 0 92.22 25.45 25.46 66.78 25.46 92.22 0zm-128.24-31.41V243.76h-45.64v27.11h45.64zm210.4 0V243.76h-45.64v27.11h45.64zm-195.86-62.21l19.16-19.17-32.27-32.29-19.17 19.17 32.28 32.29zm135.69 0l32.28-32.3-19.18-19.17-32.28 32.28 19.18 19.18zm-54.29-33.74v-45.65H181.99v45.65h27.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiForwardSun;
