import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-shotgun",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiShotgun {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M160.72 16C136 16.11 136 17.88 136 46v300c0 30 0 30 30 30h180c30 0 30 0 30-30V46c0-30 0-30-30-30H166c-1.87 0-3.63-0.01-5.28 0zM196 76h120v210H196V76zm-46.66 345A13.33 13.33 0 0 0 136 434.34v48.31A13.33 13.33 0 0 0 149.34 496h213.31A13.33 13.33 0 0 0 376 482.66v-48.31A13.33 13.33 0 0 0 362.66 421H149.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiShotgun;
