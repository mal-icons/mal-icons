import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-pistol-gun",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPistolGun {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M79.24 115.77l-28.51 67.86h406.15l-0.27-67.86h-263.83v55.61h-15v-55.6h-16.68v55.61H146.1v-55.6h-17.43v55.61h-15v-55.6H79.24zm387.83 15.96v40.66h18.69v-40.66h-18.69zM56.77 198.63l20.57 32.02L28.89 406.5l101.68 7.17 21.54-98h115.74l14.66-80.25 174.55-3.87-0.13-32.92H56.77zM263.44 235.85l-11.17 61.14h-96.05l12.98-59.05 12.53-0.28-2.22 35.5 14.26 13.58 1-33.65 24.69-16.26 43.98-0.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPistolGun;
