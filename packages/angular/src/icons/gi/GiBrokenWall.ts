import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-broken-wall",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBrokenWall {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M494 18.02l-101 0.1V119h101zm-119 0.12l-56.29 12.07-31.01 64.36-101.53-35.95L137 119h238zM18 137v61.63l12.42 31.98L62.58 247H247V137zm247 0v110h229V137zM76.29 322.59L18 332.2V375h101V265H65.32zM137 265v110h238c-48.43-109.93-0.06-1.24-48.22-110zM18 393v100.98l199-0.24L247 393zm247 0v55.79c66.07 45.22-0.13-0.03 65.8 44.87L494 493.49V393z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBrokenWall;
